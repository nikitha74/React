import { Component } from "react";
import productService from "../services/product-service";

export default class DisplayProducts extends Component
{
    constructor(props)
    {
        super(props);
        this.state={products:[]};
    }

    componentDidMount()
    {
        
        productService.getAllProducts().then((response)=>{            
            this.setState({products:response.data});
        },(error)=>{
            console.log(error)
        });
    }

    render()
    {
        return <div>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map((p)=>
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td><img width="50" height="50" src={p.picture} /></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    }
}