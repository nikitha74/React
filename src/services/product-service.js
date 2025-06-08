import axios from "axios";

const URL='http://localhost:8080/product';
class ProductService
{
    getAllProducts()
    {
        return axios.get(URL);
    }

    findProductById(id)
    {
        return axios.get(URL+"/"+id);
    }

    addProduct(product)
    {
        return axios.post(URL,product);
    }

    updateProduct(product)
    {
        return axios.put(URL,product);
    }

    deleteProduct(id)
    {
        return axios.delete(URL+"/"+id);
    }
}

export default new ProductService();