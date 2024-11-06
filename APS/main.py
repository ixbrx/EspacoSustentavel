from flask import Flask, request, jsonify, send_from_directory, render_template
import os

app = Flask(__name__)

# Fatores de emissão (em kg de CO₂ por kg de combustível)
fatores_emissao = {
    "RP-1": 3.15,
    "Hidrogênio Líquido": 0,  # LH2 não emite CO₂ diretamente
    "Metano": 2.75,
    "Combustível Sólido": 2.7
}

# Função para calcular as emissões de CO₂
def calcular_emissoes(tipo_combustivel, quantidade_combustivel):
    fator_emissao = fatores_emissao.get(tipo_combustivel, 0)
    emissoes = quantidade_combustivel * fator_emissao
    return emissoes

# Rota principal para carregar o HTML da calculadora
@app.route('/')
def index():
    # Aqui estamos servindo o arquivo 'calculadora.html' do diretório onde ele está
    return send_from_directory(os.path.abspath("."), "calculadora.html")

# Rota para processar os dados do formulário e calcular as emissões
@app.route('/calcular', methods=['POST'])
def calcular():
    tipo_combustivel = request.form.get('combustivel')
    quantidade_combustivel = float(request.form.get('quantidade'))
    lancamentos = int(request.form.get('lancamentos'))

    emissoes_totais = calcular_emissoes(tipo_combustivel, quantidade_combustivel) * lancamentos
    emissoes_totais_ton = emissoes_totais / 1000
    creditos_carbono = emissoes_totais_ton

    resultado = {
        "emissoes_totais": emissoes_totais_ton,
        "creditos_carbono": creditos_carbono
    }

    return jsonify(resultado)

# Servir arquivos estáticos como CSS, JavaScript e Imagens diretamente
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(os.path.abspath("."), filename)

# Iniciar o servidor Flask
if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='assets')  # Define a pasta de arquivos estáticos (CSS, JS, imagens)

# Rota para servir o HTML da calculadora
@app.route('/')
def index():
    return render_template('calculadora.html')  # Serve o arquivo HTML da calculadora

# Rota para servir o favicon.ico (se houver)
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.static_folder, ''), 'favicon.ico')

# Configura as rotas para arquivos estáticos (CSS, JS, etc.)
@app.route('/assets/<path:filename>')
def custom_static(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(debug=True)
