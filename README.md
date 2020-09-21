# Projeto2020.2_Professor_DaviValerio
Projeto 2 para o treinamento NTec

O site possui os seguintes bugs identificados:

Em primeiro lugar, a escala da landing page ultrapassa o topo da página quando a tela não está maximizada ou com a menor width possível no firefox, ou seja, no meio termo a logo Proffy "overflows" para o topo. Além disso, com essas widhts, ocorre um espaço em branco no rodapé da página.
Tentativas de consertar:

1-Diminuir o tamanho dos elementos, no geral, na landing page. Problema: Tudo fica desalinhado e seria necessário reorganizar a página de outra maneira. Parece uma gambiarra.

2-Diminuir o :root para 50%. Problema: não funciona para todas as widths. Para 40%: Funciona, mas todo o restante do site site fica muito pequeno.

3-Testar todos as propriedades do global.css e do style.css da página para ver qual exatamente determina esse problema. Nenhum parece determinante. 

O que mais incomoda é que tudo foi feito para assegurar que as "coisas" ocupem exatamente 100vw e 100vh, ou 100% width, 100%height, quando adequado. E não faz sentido os elementos "escaparem" da tela ou não preencherem todo o rodapé.
Aceito todas as sugestões e comentários.

Outro bug ocorre em TeacherForm. Ao selecionar "criar novo horário" sem modificar o primeiro horário, definido em domingo por default, addNewScheduleItem() cria um outro item na lista com a mesma 'key' do primeiro. Isso, em primeiro lugar, vai contra uma das diretrizes do React para organização de listas. Porém, o maior problema ocorre ao alterar o 'primeiro item' ao criar um 'novo item' quando o 'primeiro item' ainda é 'Domingo'. O item que recebe a alteração é o segundo criado, e não o primeiro.
Isso ocorre devido à escolha de definir a 'key' como o 'week_day', e impedir com que o usuário insira horários diferentes no mesmo dia. Existe alguma razão para essa escolha de projeto?

Aceito, novamente, todas as sugestões e comentários.

Por favor, avise se enontrar qualquer outro problema!
