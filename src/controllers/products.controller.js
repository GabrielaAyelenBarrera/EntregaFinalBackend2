export const createProduct = (req, res) => {
    // Lógica para crear un producto
    res.status(201).json({ message: 'Producto creado exitosamente' });
  };
  
  export const updateProduct = (req, res) => {
    // Lógica para actualizar un producto
    res.status(200).json({ message: 'Producto actualizado exitosamente' });
  };
  
  export const deleteProduct = (req, res) => {
    // Lógica para eliminar un producto
    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  };
  
  export const getProducts = (req, res) => {
    // Lógica para obtener todos los productos
    res.status(200).json({ products: [] }); // Retorna un array vacío como ejemplo
  };
  