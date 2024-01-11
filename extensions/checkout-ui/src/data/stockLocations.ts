// Hardcoded stock locations
// can be implemented in Sanity

const stockLocations = [
  {
    id: 1,
    name: 'ShipBob Moreno Valley and ShipBob',
    code: 'US',
    // TODO: need to clarify about Brazil - not present on website
    stockCoverage: ['US', 'CA', 'MX', 'BR'],
  },
  {
    id: 2,
    name: 'Service Logistics and Janssen Service',
    code: 'EU',
    stockCoverage: [
      'AT',
      'BE',
      'BG',
      'CZ',
      'DK',
      'EE',
      'FR',
      'DE',
      'HU',
      'IE',
      'IT',
      'LV',
      'LT',
      'LU',
      'MT',
      'NL',
      'NO',
      'PL',
      'PT',
      'QA',
      'RO',
      'SK',
      'SI',
      'ES',
      'SE',
      'CH',
      'TR',
      'AE',
      'GB',
    ],
  },
  {
    id: 3,
    name: 'EmmJay',
    code: 'AU',
    stockCoverage: ['AU', 'JP', 'HK', 'NZ', 'SG', 'KR'],
  },
];
