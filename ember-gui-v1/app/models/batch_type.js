var BatchType = DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  actions: DS.hasMany('App.Action')
});

BatchType.FIXTURES = [
  { id: 1,  name: 'GREEN APPLE REISLING' },
  { id: 2,  name: 'CUVEE BLANC' },
  { id: 3,  name: 'CUVEE ROUGE' },
  { id: 4,  name: 'WILDBERRY SHIRAZ' },
  { id: 5,  name: 'RASPBERRY MERLOT' },
  { id: 6,  name: 'PEACH CHARDONNAY' },
  { id: 7,  name: 'BLUEBERRY POMEGRANITE' },
  { id: 8,  name: 'BLACKBERRY MALBEC' },
  { id: 9,  name: 'NZ PINOT NOIR' },
  { id: 10, name: 'AUSTRAILIAN REISLING' },
  { id: 11, name: 'FRENCH CABERNET' },
  { id: 12, name: 'S. AFRICAN SAUV BLANC' },
  { id: 13, name: 'CALI. CHARDONNAY' },
  { id: 14, name: 'ITALIAN PINOT GRIGIO' },
  { id: 15, name: 'CHILEAN MERLOT' },
  { id: 16, name: 'AUSTRAILIAN SHIRAZ' },
  { id: 17, name: 'WASH WHITE ZINFANDEL' },
  { id: 18, name: 'ARGENTINIAN MALBEC' },
  { id: 19, name: 'ITALIAN AMARONE' },
  { id: 20, name: 'LODI OLD VINE ZINFANDEL' },
  { id: 21, name: 'RED MTN CABERNET' },
  { id: 22, name: 'STAG\'S LEAP MERLOT' }
];
export default BatchType;

