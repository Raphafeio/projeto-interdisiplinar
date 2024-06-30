document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("productForm");
    const productList = document.getElementById("productList");
    let products = [];

    productForm.addEventListener("submit", (Event) => {
        Event.preventDefault();

        const name = document.getElementById("productName").value;
        const category = document.getElementById("productCategory").value;
        const brand = document.getElementById("productBrand").value;
        const description = document.getElementById("productDescription").value;
        const price = document.getElementById("productPrice").value;

        const product = { name, category, brand, description, price };
        products.push(product);
        uptadeProductList();
        productForm.reset();
    });

    const uptadeProductList = () => {
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.brand}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>
            <button class="edit" onclick="editProduct(${index})">Editar</button>
            <button class="delete" onclick="deleteProduct(${index})">Remover</button>
        </td>
        `;
            productList.appendChild(row);
        });
    };

    window.editProduct = (index) => {
        const product = products[index];
        document.getElementById("productName").value = product.name;
        document.getElementById("productCategory").value = product.category;
        document.getElementById("productBrand").value = product.brand;
        document.getElementById("productDescription").value =
            product.description;
        document.getElementById("productPrice").value = product.price;

        products.splice(index, 1);
        uptadeProductList();
    };

    window.deleteProduct = (index) => {
        products.splice(index, 1);
        uptadeProductList();
    };
});
