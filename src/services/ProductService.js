import axios from "axios";

export class ProductService {

    // baseUrl = "https://store-products-api.herokuapp.com/api/store/";
    baseUrl = "http://localhost:3000/";

    create(product){
        return axios.post(this.baseUrl+"product/", product).then(res => res.data.newProduct);
    }

    readAll(){
        return axios.get(this.baseUrl+"product").then(res => res.data.productData);
    }

    update(product){
        return axios.put(this.baseUrl+"product/"+product._id, product).then(res => res.data.existingProduct);
    }

    delete(id){
        return axios.delete(this.baseUrl+"product/"+id).then(res => res.data);
    }
}