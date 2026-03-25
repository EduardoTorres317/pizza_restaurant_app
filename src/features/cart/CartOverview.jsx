import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  const totalValue = cart.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
  const itemQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!itemQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{itemQuantity}</span>
        <span>{formatCurrency(totalValue)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
