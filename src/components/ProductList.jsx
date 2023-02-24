import React, { useContext, useState } from "react";
import { Panel } from "primereact/panel";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ProductContext } from "../contexts/ProductContext";
import ProductForm from "./ProductForm";

const ProductList = () => {
  const { products, findProduct } = useContext(ProductContext);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const saveProduct = (id) => {
    findProduct(id);
    setIsVisible(true);
  };
  let header = (
    <div style={{'textAlign':'right'}}>
        <i className="pi pi-search" style={{margin:'4px 10px 0 0'}}></i>
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Busqueda global" size="50"/>
    </div>
  );
  const footer = (
    <div className="p-clearfix" style={{ width: "100%" }}>
      <Button
        icon="pi pi-plus"
        label="Agregar"
        onClick={() => setIsVisible(true)}
      />
    </div>
  );

  return (
    <div>
      <Panel header="LISTA DE PRODUCTOS" style={{ textAlign: "center" }}>
        <DataTable
          value={products}
          selectionMode="single"
          onSelectionChange={(e) => saveProduct(e.value._id)}
          header={header}
          footer={footer}
          globalFilter={globalFilter}
          className="p-datatable-sm p-datatable-responsive-demo"
          showGridlines
          resizableColumns columnResizeMode="fit"
        >
          <Column field="name" header="Nombre" sortable/>
          <Column field="price" header="Precio"sortable />
          <Column field="expiry_date" header="Fecha de Caducidad" sortable/>
        </DataTable>
      </Panel>
      <ProductForm isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default ProductList;
