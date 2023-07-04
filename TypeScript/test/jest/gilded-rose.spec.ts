import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

describe('Gilded Rose', () => {
  it('quality degrades faster after sell date', () => {
    const gildedRose = new GildedRose([new Item('foo', 2, 10)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});
describe('Gilded Rose',() =>{
  it('quality should be positive', () => {
    const gildedRose = new GildedRose([new Item('foo', 0,0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});


