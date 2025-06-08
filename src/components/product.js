import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { Component } from "react";
import productService from "../services/product-service";

export default class Product extends Component
{
    constructor(props)
    {
        super(props);
        this.state={id:'',name:'',price:'',picture:''};
        this.changeHandler=this.changeHandler.bind(this);
        this.addProduct=this.addProduct.bind(this);
    }

    readFileDataAsBase64(e) {
        const file = e.target.files[0];
    
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                resolve(event.target.result);
            };
    
            reader.onerror = (err) => {
                reject(err);
            };
    
            reader.readAsDataURL(file);
        });
    }

    changeHandler(event)
    {
        if(event.target.name!=='picture')
            this.setState({[event.target.name]:event.target.value});
        else
        {
            this.readFileDataAsBase64(event).then((data)=>{
                this.setState({picture:data});
            })
        }
        console.log(this.state);
    }

    addProduct()
    {
        console.log("the sate is as below:")
        console.log(this.state)
        productService.addProduct(this.state).then((response)=>{
            alert(response.data);
        });
    }
    render()
    {
        return <div>
            <form>
                Id:<input type="number" name="id" className="form-control" onChange={this.changeHandler} />
                Name:<input type="text" name="name" className="form-control" onChange={this.changeHandler} />
                Price:<input type="text" name="price" className="form-control" onChange={this.changeHandler} />
                Picture:<input type="file" name="picture" className="form-control" onChange={this.changeHandler} />
                <img width="50" height="50" src={this.state.picture} />
                <br/>
                <input type="button" value="Add" className="btn btn-success" onClick={this.addProduct} />&nbsp;
                <input type="button" value="Update" className="btn btn-warning" />&nbsp;
                <input type="button" value="Delete" className="btn btn-delete" />&nbsp;
            </form>
            <br/>
            {this.state.id}
            <br/>
        </div>
    }
}