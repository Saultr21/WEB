class Articulo {
    constructor(codigo, descripcion, precio, cantidad, imagen) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precio = precio;
      this.cantidad = cantidad;
      this.imagen = imagen;
    }
  }

  function verPedido() {
    const productos = document.querySelectorAll('.producto');
    const pedido = [];

    productos.forEach(producto => {
      const codigo = producto.querySelector('p').textContent.split(' ')[1];
      const descripcion = producto.querySelector('p').textContent;
      const precio = parseFloat(producto.querySelector('p:nth-child(3)').textContent.trim().split('$')[1]);
      const cantidad = parseInt(producto.querySelector('input').value);
      const imagen = producto.querySelector('img').src;

      const articulo = new Articulo(codigo, descripcion, precio, cantidad, imagen);
      
      if (cantidad > 0) {
        pedido.push(articulo)
      }
    });

    // Almacenar en la cookie
    const pedidoJSON = JSON.stringify(pedido);
    document.cookie = `pedido=${pedidoJSON}`;

    // Abrir una nueva pestaña manualmente
    window.open('pedido.html', '_blank');
  }