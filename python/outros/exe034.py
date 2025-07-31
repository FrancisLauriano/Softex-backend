#Programa para aprovar emprestimo bancario para comprar uma casa. 
#Programa vai perguntar o valor da casa, o salario do comprador e em quantos anos vai pagar.
#Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salario 
#ou então o emprestimo será negado.

def emprestimoBancario():
    valorCasa = float(input('Informe o valor da casa R$: '))
    salario = float(input('Informe o salário R$: '))
    anos = int(input('Infome em quantos anos pretende pagar: '))

    numeroParcelas = anos*12
    valorPrestacao = valorCasa / numeroParcelas
    prestacaoEmRelacaoSalario = (valorPrestacao*100) / salario

    if prestacaoEmRelacaoSalario <= 30:
        mensagem = 'Para comprar uma casa de R${:.2f} em {} anos, você pagará a casa em {} parcelas mensais de R${:.2f}\nEmprestimo APROVADO!'.format(valorCasa, anos, numeroParcelas, valorPrestacao)
    else:
        mensagem = 'Para comprar uma casa de R${:.2f} em {} anos, você pagará a casa em {} parcelas mensais de R${:.2f}\nEmprestimo NEGADO!'.format(valorCasa, anos, numeroParcelas, valorPrestacao)

    return mensagem

resultado = emprestimoBancario()
print(resultado)    


