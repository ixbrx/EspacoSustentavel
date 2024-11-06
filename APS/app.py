from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Fatores de emissão (em kg de CO₂ por kg de combustível)
fatores_emissao = {
    "RP-1": 3.15,
    "Hidrogênio Líquido": 0,
    "Metano": 2.75,
    "Combustível Sólido": 2.7
}

# Função para calcular as emissões de CO₂
def calcular_emissoes(tipo_combustivel, quantidade_combustivel):
    fator_emissao = fatores_emissao.get(tipo_combustivel, 0)
    emissoes = quantidade_combustivel * fator_emissao
    return emissoes

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/calculadora')
def calculadora():
    return render_template('calculadora.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    tipo_combustivel = request.form['combustivel']
    quantidade_combustivel = float(request.form['quantidade'])
    lancamentos = int(request.form['lancamentos'])

    # Calcular as emissões totais
    emissoes_totais = calcular_emissoes(tipo_combustivel, quantidade_combustivel) * lancamentos
    emissoes_totais_ton = emissoes_totais / 1000
    creditos_carbono = emissoes_totais_ton

    return jsonify({
        "emissoes_totais": emissoes_totais_ton,
        "creditos_carbono": creditos_carbono
    })

if __name__ == '__calculadora__':
    app.run(debug=True)
