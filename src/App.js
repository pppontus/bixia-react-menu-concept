import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Styles
const styles = {
  container: 'font-sans bg-gray-100 min-h-screen py-8',
  innerContainer: 'container mx-auto p-4 max-w-3xl bg-white shadow-lg rounded-lg',
  heading: 'text-3xl font-bold mb-6',
  menuSelectorContainer: 'mb-6 flex space-x-4',
  menuSelectorButton: 'px-6 py-3 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
  menuItemContainer: 'border-b border-gray-200',
  menuItemButton: 'flex items-center justify-between w-full p-2 text-left hover:bg-orange-50 transition-colors',
};

const MenuItem = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.menuItemContainer} ${depth === 0 ? 'mt-2' : ''}`}>
      <button
        className={`${styles.menuItemButton} ${
          depth === 0 ? 'font-bold text-lg' : ''
        } ${depth === 1 ? 'font-semibold' : ''}`}
        style={{ paddingLeft: `${depth * 1.5 + 0.5}rem`, color: '#2e2e2e' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.label}</span>
        {item.children && (
          isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />
        )}
      </button>
      {isOpen && item.children && (
        <div className="pl-4">
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const MenuSelector = ({ options, selectedOption, onSelect }) => (
  <div className={styles.menuSelectorContainer}>
    {options.map((option, index) => (
      <button
        key={index}
        className={styles.menuSelectorButton}
        style={{
          backgroundColor: selectedOption === option ? '#EE801C' : 'white',
          color: selectedOption === option ? 'white' : '#2e2e2e',
          borderColor: selectedOption === option ? '#EE801C' : '#e5e7eb',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        onClick={() => onSelect(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

const App = () => {
  const [menuData, setMenuData] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const data = {
      "Privat": [
        {
          label: "Villa",
          children: [
            {
              label: "Elavtal",
              children: [
                { label: "Våra elavtal" },
                { label: "Flytt" },
                { label: "Elpriser" },
                { label: "Guide - Hjälp mig välja" }
              ]
            },
            {
              label: "Solceller",
              children: [
                { label: "Solcellspaket" },
                { label: "Information om solceller" },
                { label: "Guide - Sparar jag på solceller?" }
              ]
            },
            {
              label: "Batterilagring",
              children: [
                { label: "Batteripaket" },
                { label: "Information om batterilagring" },
                { label: "Guide - Sparar jag på hembatteri?" }
              ]
            },
            {
              label: "Elbil",
              children: [
                { label: "Elbilsladdare" },
                { label: "Information om elbilsladdning" },
                { label: "Guide - Är elbil för mig?" }
              ]
            },
            {
              label: "Kunskapscenter - Populära kategorier",
              children: [
                { label: "Sänk din elkostnad" },
                { label: "Minska din miljöpåverkan" },
                { label: "Allt om elbil" },
                { label: "Alla kategorier" }
              ]
            }
          ]
        },
        {
          label: "Lägenhet",
          children: [
            {
              label: "Elavtal",
              children: [
                { label: "Våra elavtal" },
                { label: "Elpriser" },
                { label: "Guide - Hjälp mig välja" }
              ]
            },
            {
              label: "Flytt",
              children: [
                { label: "Flytta elavtal" },
                { label: "Att tänka på" },
                { label: "Guide - Välj rätt elavtal" }
              ]
            },
            {
              label: "Kunskapscenter - Populära kategorier",
              children: [
                { label: "Sänk din elkostnad" },
                { label: "Minska din miljöpåverkan" },
                { label: "Smarta hem" },
                { label: "Alla kategorier" }
              ]
            }
          ]
        },
        { label: "Nyheter" },
        { label: "Kundcenter" },
        { label: "Appen Mitt Bixia" }
      ],
      "Företag": [
        {
          label: "Elavtal",
          children: [
            { label: "Våra elavtal" },
            { label: "Elmarknaden" },
            { label: "Elpriser" },
            { label: "Guide - Hjälp mig välja" }
          ]
        },
        {
          label: "För producenter",
          children: [
            { label: "Alternativ 1" },
            { label: "Alternativ 2" },
            { label: "Alternativ 3" }
          ]
        },
        {
          label: "Batterilagring",
          children: [
            { label: "Alternativ 1" },
            { label: "Alternativ 2" },
            { label: "Alternativ 3" }
          ]
        },
        {
          label: "Kunskapscenter",
          children: [
            { label: "Sänk din elkostnad" },
            { label: "Sänk ditt miljöavtryck" },
            { label: "Solceller" },
            { label: "Elbilsladdning" },
            { label: "Batterilagring" }
          ]
        },
        { label: "Nyheter" },
        { label: "Kontakta oss" },
        { label: "Logga in" }
      ]
    };
    setMenuData(data);
    setSelectedMenu('Privat'); // Set default selected menu
  }, []);

  if (!menuData) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading} style={{ color: '#EE801C' }}>Bixia Navigation Concept</h1>
        <MenuSelector 
          options={Object.keys(menuData)} 
          selectedOption={selectedMenu}
          onSelect={setSelectedMenu} 
        />
        <div className="bg-white rounded-lg overflow-hidden">
          {selectedMenu && menuData[selectedMenu].map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;