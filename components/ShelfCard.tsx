import React from 'react';
import Image from 'next/image';

interface ShelfProps {
  items: {
    imageUrl: string;
    title: string;
    description: string;
  }[];
}

const Shelf: React.FC<ShelfProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col justify-between max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className='w-full h-48 md:h-72'><Image className="object-cover " fill src={item.imageUrl} alt={item.title} />
          </div><div className="px-4 py-2 md:px-6">
            <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomePage: React.FC = () => {
  const shelfItems = [
    {
      imageUrl: 'https://via.placeholder.com/350x150',
      title: 'Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageUrl: 'https://via.placeholder.com/350x150',
      title: 'Item 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageUrl: 'https://via.placeholder.com/350x150',
      title: 'Item 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-800 mb-4">Shelf</h2>
      <Shelf items={shelfItems} />
    </div>
  );
};

export default HomePage;
