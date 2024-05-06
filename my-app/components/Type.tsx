import React from 'react'

const typeColors = {
    fire: "bg-red-500",
    grass: "bg-green-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    poison: "bg-purple-500",
    normal: "bg-gray-400",
    ice: "bg-blue-200",
    fighting: "bg-red-800",
    ground: "bg-yellow-700",
    flying: "bg-blue-300",
    psychic: "bg-pink-500",
    bug: "bg-green-700",
    rock: "bg-yellow-800",
    ghost: "bg-purple-700",
    dragon: "bg-blue-800",
    dark: "bg-gray-800",
    steel: "bg-gray-600",
    fairy: "bg-pink-300"
  };

interface TypeProps {
    typeName: keyof typeof typeColors; 
}

const Type:React.FC<TypeProps> = ({typeName}) => 
{
    const bgColor = typeColors[typeName] || "bg-gray-500";
  return (
    <div className={`inline-block px-3 text-white rounded-md ${bgColor}`}>
        {typeName}
    </div>
  )
}

export default Type