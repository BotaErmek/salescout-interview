// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library

async function manageRedis(): Promise<void> {
    import { createClient } from 'redis';

    async function manageRedis(): Promise<void> {

        const client = createClient();

        client.on('error', (err) => {
            console.log('Redis Client Error', err);
        });

        try {
            await client.connect();
            console.log('Connected to Redis');


            await client.set('user:1', 'Alice');
            await client.set('user:2', 'Bob');
            await client.set('user:3', 'Charlie');

            console.log('Keys saved to Redis');


            const user1 = await client.get('user:1');
            const user2 = await client.get('user:2');
            const user3 = await client.get('user:3');

            console.log('Values retrieved from Redis:');
            console.log('user:1:', user1);
            console.log('user:2:', user2);
            console.log('user:3:', user3);

        } catch (error) {
            console.error('Error interacting with Redis:', error);
        } finally {

            await client.disconnect();
            console.log('Disconnected from Redis');
        }
    }

    module.exports = { manageRedis };

}

module.exports = { manageRedis };