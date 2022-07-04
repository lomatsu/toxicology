import React from 'react';

class List extends React.Component {
  state = {
    resultados: []
  };

  componentDidMount() {
    fetch('https://toxicology-test.herokuapp.com/api/samples', {
      method: 'get',
      headers: {
        'Authorization': `Bearer + {process.env.TOKEN}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          resultados: res
        });
      });
  }
  render() {
    console.log("hereee", this.state.resultados.response)
    return (
      <div>
        <h1>Lista de Amostras</h1>

        <ul>
          {this.state.resultados.response?.map(item => (
            <li key={item.id}>
              <p><b>Codigo da Amostra:</b> {item.codigo_amostra}</p>
              <p><b>Resultado:</b> {item.result}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;