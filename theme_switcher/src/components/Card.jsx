import React from 'react'

export default function Card() {
  return (
    <div className="max-w-sm w-full bg-surface border border-gray-200 rounded-lg shadow-lg p-6">
      <img
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        alt="cat"
        className="w-full h-full object-cover rounded-md mb-4"
      />
      <h3 className="text-primary text-xl font-semibold mb-2">Cat's Meow</h3>
      <p className="text-text mb-4">
        This demo card uses custom-tailwind colors linked to CSS variables. Toggle dark/light to see them change.
      </p>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 rounded bg-primary text-background hover:opacity-90 cursor-pointer">
          Add to cart
        </button>
        <span className="text-text font-bold">$59.99</span>
      </div>
    </div>
  )
}
