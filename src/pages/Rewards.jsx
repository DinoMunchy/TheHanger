import React from 'react';
import { StarIcon, GiftIcon, SparklesIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

const RewardTier = ({ name, points, benefits, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-pink-600 mr-3" />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4">{points} Points</p>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <span className="h-1.5 w-1.5 bg-pink-600 rounded-full mr-2"></span>
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

const Rewards = () => {
  const rewardTiers = [
    {
      name: 'Bronze Member',
      points: '0-500',
      icon: StarIcon,
      benefits: [
        'Earn 1 point per $1 spent',
        'Birthday special reward',
        'Early access to sales',
      ],
    },
    {
      name: 'Silver Member',
      points: '501-1000',
      icon: GiftIcon,
      benefits: [
        'Earn 2 points per $1 spent',
        'Free shipping on orders over $50',
        'Exclusive member-only deals',
        'Birthday double points',
      ],
    },
    {
      name: 'Gold Member',
      points: '1001+',
      icon: SparklesIcon,
      benefits: [
        'Earn 3 points per $1 spent',
        'Free shipping on all orders',
        'Priority customer service',
        'Early access to new collections',
        'Special birthday gift',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TheHanger Rewards</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join our rewards program and earn points with every purchase. The more you shop, the more you earn!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rewardTiers.map((tier, index) => (
          <RewardTier key={index} {...tier} />
        ))}
      </div>

      <div className="mt-16 bg-pink-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          How to Earn Points
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <ShoppingBagIcon className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Make a Purchase</h3>
            <p className="text-gray-600">Earn points for every dollar spent</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UserIcon className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Create an Account</h3>
            <p className="text-gray-600">Get 100 bonus points when you join</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <StarIcon className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Write Reviews</h3>
            <p className="text-gray-600">Earn 50 points per review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards; 