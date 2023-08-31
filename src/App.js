import React from 'react';
import './App.css';
import logo from './agua.jpg';
import bem from './bem.jpg';
import ori from './ori.jpg';
import tipo from './tipo.jpg';
import imp from './imp.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	    <h1>Água Mineral</h1>
		<p>Conheça os benefícios, origem, tipos e importância para a saúde.</p>
		<img src={logo} className="App-logo" alt="Água Mineral" />
      </header>
      <section className="Benefits">
        <h2>Benefícios da Água Mineral</h2>
		<img src={bem} className="App-logo" alt="Benefícios da Água Mineral" />
        <ul>
          <li>Mantém o corpo hidratado</li>
          <li>Fornece minerais essenciais</li>
          <li>Auxilia na digestão</li>
          <li>Promove a saúde da pele</li>
        </ul>
      </section>
      <section className="Origin">
        <h2>Origem da Água Mineral</h2>
		<img src={ori} className="App-logo" alt="Origem da Água Mineral" />
        <p>A água mineral é proveniente de fontes naturais que são protegidas contra a poluição e a contaminação. Essas fontes geralmente estão localizadas em regiões geográficas específicas, como montanhas, vales e áreas remotas. A água mineral é obtida dessas fontes naturais por meio de processos de captação cuidadosamente controlados para garantir sua pureza e qualidade.</p>
        <p>Ao contrário da água potável comum, que pode ser tratada e purificada quimicamente, a água mineral é naturalmente filtrada pelas camadas de rochas e solo. Isso ajuda a conferir a ela sua composição mineral única e muitas vezes saudável. A água mineral pode conter uma variedade de minerais essenciais, como cálcio, magnésio, potássio e outros, que são benéficos para o corpo humano.</p>
        <p>As características geológicas da região onde a fonte está localizada desempenham um papel importante na composição da água mineral. Dependendo dos minerais presentes nas camadas subterrâneas, a água mineral pode ter diferentes propriedades e benefícios. É por isso que existem diferentes tipos de água mineral no mercado, cada um com suas características únicas e potenciais vantagens para a saúde.</p>
        <p>Devido às suas origens naturais e à sua composição mineral, a água mineral é frequentemente vista como uma escolha saudável para hidratação. Além disso, muitas pessoas acreditam que os minerais presentes na água mineral podem contribuir para a saúde óssea, a função muscular e outras funções vitais do corpo. No entanto, é importante lembrar que a quantidade de minerais em cada tipo de água mineral pode variar, então é recomendável verificar os rótulos para obter informações específicas sobre sua composição.</p>
        <p>Em resumo, a água mineral é mais do que apenas uma fonte de hidratação. Ela carrega consigo as características únicas das fontes naturais de onde é obtida e pode oferecer uma variedade de benefícios potenciais para a saúde. Ao escolher água mineral, muitas pessoas buscam não apenas saciar sua sede, mas também usufruir dos minerais naturais que ela contém.</p>
      </section>
      <section className="Types">
        <h2>Tipos de Água Mineral</h2>
		<img src={tipo} className="App-logo" alt="Tipos de Água Mineral" />
        <p>Existem diferentes tipos de água mineral disponíveis no mercado, cada um com suas características e benefícios únicos. A variação nos tipos de água mineral está relacionada à composição mineral, origem geográfica e processos naturais pelos quais a água passa antes de chegar às garrafas.</p>
        <ul>
          <li><p>01. <b>Água Mineral Natural</b>: É a água que é coletada diretamente de uma fonte natural, sem passar por tratamento químico significativo. Ela é rica em minerais naturais devido ao contato com camadas subterrâneas de rochas e solo.</p></li>
          <li><p>02. <b>Água Mineral Gasosa</b>: Também conhecida como água com gás, ela contém dióxido de carbono dissolvido, o que resulta em efervescência quando a garrafa é aberta. Muitas pessoas apreciam o sabor borbulhante desse tipo de água.</p></li>
          <li><p>03. <b>Água Mineral com Sabor</b>: Algumas marcas oferecem água mineral com sabor, adicionando extratos naturais de frutas ou ervas. Isso pode ser uma opção para quem deseja uma experiência de sabor mais interessante.</p></li>
          <li><p>04. <b>Água Mineral Alcalina</b>: A água mineral alcalina possui um pH mais elevado do que a água pura, alegando trazer benefícios à saúde, como equilibrar o pH do corpo.</p></li>
          <li><p>05. <b>Água Mineral de Nascente</b>: Essa água é coletada de nascentes naturais e, geralmente, é considerada muito pura devido à sua origem subterrânea.</p></li>
          <li><p>06. <b>Água Mineral Rica em Eletrólitos</b>: Alguns tipos de água mineral contêm uma concentração maior de eletrólitos, como sódio e potássio. Isso pode ser benéfico para a reidratação após atividades físicas intensas.</p></li>
        </ul>
        <p>É importante ler os rótulos das garrafas para entender as características específicas de cada tipo de água mineral. A escolha do tipo de água mineral pode depender das preferências pessoais, das necessidades de hidratação e dos benefícios desejados. Lembre-se de que, embora a água mineral possa trazer benefícios à saúde, é fundamental manter um equilíbrio em sua dieta geral e procurar orientação profissional caso tenha preocupações específicas.</p>
      </section>
      <section className="Importance">
        <h2>Importância para a Saúde</h2>
		<img src={imp} className="App-logo" alt="Importância para a Saúde" />
        <p>A água mineral desempenha um papel crucial na saúde, sendo essencial para o funcionamento adequado do corpo humano. Hidratação adequada é fundamental para uma série de funções vitais, e a água mineral pode ser uma escolha especialmente benéfica devido aos minerais naturais que ela contém.</p>
        <p><b>Hidratação Adequada</b>: A hidratação é essencial para manter o equilíbrio de fluidos do corpo, ajudar na digestão, regular a temperatura corporal e apoiar o funcionamento do sistema circulatório. A água mineral, rica em minerais essenciais, pode contribuir para a reidratação de forma mais completa do que a água comum.</p>
        <p><b>Minerais Essenciais</b>: A água mineral pode ser uma fonte natural de minerais importantes para a saúde, como cálcio, magnésio, potássio e bicarbonato. Esses minerais desempenham papéis cruciais em várias funções, incluindo a saúde óssea, a função muscular, a saúde cardíaca e a regulação do pH corporal.</p>
        <p><b>Ajuda na Eliminação de Toxinas</b>: A água desempenha um papel fundamental na eliminação de toxinas do corpo por meio da urina e do suor. Minerais presentes na água mineral podem auxiliar nesse processo, ajudando a manter os sistemas de desintoxicação do corpo funcionando adequadamente.</p>
        <p><b>Apoio ao Metabolismo</b>: Alguns minerais presentes na água mineral, como o magnésio, desempenham um papel importante no metabolismo energético e na função celular. Esses minerais podem contribuir para a produção de energia e o bom funcionamento das células.</p>
        <p><b>Saúde Óssea</b>: A ingestão adequada de cálcio e outros minerais é essencial para a saúde óssea. A água mineral com teor de cálcio pode ser uma adição benéfica à dieta, especialmente para indivíduos que têm dificuldade em obter cálcio suficiente por meio de alimentos.</p>
        <p>É importante ressaltar que, embora a água mineral ofereça potenciais benefícios à saúde, ela não deve ser considerada como substituta de uma dieta equilibrada e rica em nutrientes. Além disso, as necessidades individuais de hidratação podem variar de pessoa para pessoa. Beber água mineral como parte de um estilo de vida saudável, juntamente com uma dieta balanceada e atividade física regular, pode contribuir para a manutenção da saúde e do bem-estar geral.</p>
      </section>
      <section className="Video">
        <h2>Vídeo</h2>
        <p>Assista um video interessante sobre a relação do homem e a água.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/iuatPAW-Xew?si=2FCPmcy6UJ-6WjCt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </div>
  );
}

export default App;