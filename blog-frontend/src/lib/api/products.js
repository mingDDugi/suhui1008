import client from './client';



export const writeProduct = ({ title, body, tags, price, image, quantity, size }) =>
  client.post('/api/products', { title, body, tags, price, image, quantity, size });


export const readProduct = id => client.get(`/api/products/${id}`);

export const listProducts = () => {
  return client.get(`/api/products`, {
 });
};

export const updateProduct = ({ id, title, body, tags, price, image, quantity,size }) =>
      client.patch(`/api/products/${id}`, 
      {
        title, 
        body,
        tags,
        price,
        image,
        quantity,
        size,
         });

export const removeProduct = id => client.delete(`/api/products/${id}`);