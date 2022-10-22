import React, { Component } from "react"
import ResultSearch from "../SearchResult";

export class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: '',
        searchWord:'',
        sizeFrom:'',
        sifeOf:'',
        priceFrom:'',
        priceOf:'',
        isSubmitted: false

    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value
        this.setState({
        [name]: value
        });
        
    }
  
    handleSubmit(event) {
      //alert('Submit:'+ this.state.type + " " + this.state.searchWord + " " + this.state.sizeFrom + " " + this.state.sifeOf + " " +this.state.priceFrom + " " +this.state.priceOf)
      this.setState({isSubmitted: true})
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <div className="container forms">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <select name="type" value={this.state.type} onChange={this.handleChange}>
                            <option value="stan">Stan</option>
                            <option value="kuca">Kuća</option>
                            <option value="lokal">Lokal</option>
                            <option value="poslovniProstor">Poslovni prostor</option>
                            <option value="zemljiste">Zemljište</option>
                            <option value="garaza">Garaža</option>
                            <option value="sveNekretnine">Sve nekretnine</option>
                        </select>
                        <input name="searchWord" type="text" value={this.state.searchWord} placeholder="Grad,Opština,Lokacija,Ulica" onChange={this.handleChange} />
                        <input name="sizeFrom" type="text" value={this.state.sizeFrom} placeholder="od m2" onChange={this.handleChange} />
                        <input name="sifeOf" type="text" value={this.state.sifeOf} placeholder="do m2" onChange={this.handleChange} />
                        <input name="priceFrom" type="text" value={this.state.priceFrom} placeholder="cena od" onChange={this.handleChange} />
                        <input name="priceOf" type="text" value={this.state.priceOf} placeholder="cena do" onChange={this.handleChange} />
                        <input type="submit" value="Pretraži" />
                    </div>
                </form>
            </div>
            <div className="container result">
                {this.state.isSubmitted && <ResultSearch type = {this.state.type} searchWord = {this.state.searchWord} sizeFrom = {this.state.sizeFrom} sifeOf = {this.state.sifeOf} priceFrom = {this.state.priceFrom} priceOf = {this.state.priceOf}/>}
            </div>
        </div>
      );
    }
  }
