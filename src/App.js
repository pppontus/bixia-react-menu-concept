import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const MenuItem = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-200 ${depth === 0 ? 'mt-2' : ''}`}>
      <button
        className={`flex items-center justify-between w-full p-2 text-left ${
          depth === 0 ? 'font-bold text-lg' : ''
        } ${depth === 1 ? 'font-semibold' : ''} hover:bg-orange-50 transition-colors`}
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
  <div className="mb-6 flex space-x-4">
    {options.map((option, index) => (
      <button
        key={index}
        className={`px-6 py-3 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
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

const VersionSelector = ({ versions, selectedVersion, onSelect }) => (
  <div className="mb-6 flex space-x-4">
    {versions.map((version, index) => (
      <button
        key={index}
        className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
        style={{
          backgroundColor: selectedVersion === version ? '#4A5568' : 'white',
          color: selectedVersion === version ? 'white' : '#4A5568',
          borderColor: '#4A5568',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        onClick={() => onSelect(version)}
      >
        {version}
      </button>
    ))}
  </div>
);

const App = () => {
  const [menuVersions, setMenuVersions] = useState({
    'Menu 1': {
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
    },
    'Menu 2': {
      "Privat": [
        {
          label: "Elavtal",
          children: [
            {
              label: "Våra elavtal och priser",
              children: [
                { label: "Bixia Fast pris" },
                { label: "Bixia Rörligt pris" },
                { label: "Bixia Timpris" },
                { label: "Anvisat pris" }
              ]
            },
            { label: "Teckna elavtal" },
            { label: "Flytta elavtal" },
            { label: "Ändra elavtal" },
            {
              label: "Tilläggstjänster",
              children: [
                { label: "Bixia Nära" }
              ]
            }
          ]
        },
        {
          label: "Solceller",
          children: [
            { label: "Sälja solel" }
          ]
        },
        { label: "Elbilsladdning" },
        {
          label: "Energitjänster",
          children: [
            { label: "Batterilagring" },
            { label: "Realtidsmätare" },
            { label: "Smart laddning" },
            { label: "Tilläggsisolera vinden" }
          ]
        },
        {
          label: "Kundservice",
          children: [
            {
              label: "Avtalsvillkor och rättigheter",
              children: [
                { label: "Avtalsvillkor och blanketter" },
                { label: "Ångerrätt" },
                { label: "Säga upp elavtal" },
                { label: "Klagomål och reklamation" },
                { label: "Så behandlar vi personuppgifter" }
              ]
            },
            { label: "Driftinformation och felanmälan" },
            { label: "Faktura och betalning" }
          ]
        }
      ],
      "Företag": [
        {
          label: "Elavtal",
          children: [
            {
              label: "Våra elavtal",
              children: [
                { label: "Bixia Framtid" },
                { label: "Rörligt elpris" },
                { label: "Timpris" },
                { label: "Portföljförvaltning" },
                { label: "Teckna elavtal" }
              ]
            },
            {
              label: "Miljötillval",
              children: [
                { label: "100 % förnybar el" },
                { label: "100 % förnybar el från vindkraft" },
                { label: "100 % förnybar el från vattenkraft" },
                { label: "Bixia Nära Exklusiv - 100 % förnybar el från valfri anläggning" },
                { label: "Bra miljöval" }
              ]
            },
            {
              label: "Ramavtal",
              children: [
                { label: "Teckna ramavtal för er organisation" },
                { label: "Fastighetsägarna" },
                { label: "ICA" },
                { label: "…" }
              ]
            },
            { label: "Flytta elavtal" },
            { label: "Ändra elavtal" }
          ]
        },
        {
          label: "Producera och sälja el",
          children: [
            {
              label: "Solel",
              children: [
                { label: "Lantbruksfastighet" },
                { label: "Bostadsrättsförening" },
                { label: "Industri och företag" },
                { label: "Solpark" },
                { label: "Villatak" }
              ]
            },
            { label: "Vindkraft" },
            { label: "Vattenkraft" },
            { label: "Producentförmåner" }
          ]
        },
        {
          label: "Energitjänster",
          children: [
            { label: "Bixia Flex" },
            { label: "Reglertjänster" },
            { label: "Effektoptimering" },
            { label: "Batterilagring" },
            {
              label: "Solceller",
              children: [
                { label: "Bixia Solklart - låna ut ditt tak" },
                { label: "Bixia Solpark - köp el direkt från en solpark" }
              ]
            }
          ]
        },
        {
          label: "Elbilsladdning",
          children: [
            { label: "Arbetsplats" },
            { label: "Flerfamiljsfastighet" },
            { label: "Publik laddning" }
          ]
        },
        { label: "Kontakta oss" }
      ]
    }
  });
  
  const [selectedVersion, setSelectedVersion] = useState('Menu 1');
  const [selectedMenu, setSelectedMenu] = useState('Privat');

  if (!menuVersions[selectedVersion]) return <div>Loading...</div>;

  return (
    <div className="font-sans bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-4 max-w-3xl bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6" style={{ color: '#EE801C' }}>Bixia Navigation Concept</h1>
        <VersionSelector 
          versions={Object.keys(menuVersions)}
          selectedVersion={selectedVersion}
          onSelect={setSelectedVersion}
        />
        <MenuSelector 
          options={Object.keys(menuVersions[selectedVersion])} 
          selectedOption={selectedMenu}
          onSelect={setSelectedMenu} 
        />
        <div className="bg-white rounded-lg overflow-hidden">
          {selectedMenu && menuVersions[selectedVersion][selectedMenu].map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
