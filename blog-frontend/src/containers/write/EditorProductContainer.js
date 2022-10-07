import React, { useCallback, useEffect } from 'react';
import EditorProduct from '../../components/writeProduct/EditProduct';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/productwrite';

const EditorProductContainer = () => {
    const dispatch = useDispatch();
    const { title, body, tags, price, image, quantity } = useSelector(({productWrite}) => ({
        title : productWrite.title,
        body : productWrite.body,
        tags : productWrite.tags,
        price : productWrite.price, 
        image : productWrite.image, 
        quantity : productWrite.quantity
    }));

    const onChangeField = useCallback(
        payload => dispatch(changeField(payload)),
        [dispatch]
    );

    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return <EditorProduct title={title} body={body} tags={tags} price={price} image={image} quantity={quantity} onChangeField={onChangeField}/>;
};

export default EditorProductContainer;