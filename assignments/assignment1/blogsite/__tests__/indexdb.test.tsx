import "fake-indexeddb/auto";
import { addReadingList, dbInti, getReadingList, removeFromList } from '@/utils/indexDBConfig';

export const testSlugs = [
    'tech-vision-2030-anticipating-the-next-wave-of-innovations',
    'from-virtual-realities-to-augmented-futures-tech-s-evolution'
]

export const testEmail = [
    'smit@gmail.com'
]

describe('Home Page', () => {
    it('should able to connect indexDB!!', async () => {
        const connected = await dbInti();
        expect(connected).not.toBeFalsy();
    })

    it('should add slug to indexDB!!', async () => {
        const r = await addReadingList(testSlugs[0], testEmail[0]);
        expect(r).toBe(1);
    })

    it('should remove slug from indexDB!!', async () => {
        const r = await addReadingList(testSlugs[0], testEmail[0]);
        const isRemoved = await removeFromList(r)
        expect(isRemoved).toBe(true);
    })

    it('should able to fetch stored slugs from indexDB!!', async () => {
        const isRemoved = await removeFromList(1)
        const r1 = await addReadingList(testSlugs[0], testEmail[0]);
        const r2 = await addReadingList(testSlugs[1], testEmail[0]);
        const result = await getReadingList();
        expect(result).toMatchObject([
            {
                slug: testSlugs[0],
                email: testEmail[0]
            },
            {
                slug: testSlugs[1],
                email: testEmail[0]
            }
        ])
    })
})