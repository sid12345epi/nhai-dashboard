import * as redis from 'redis';



class Redis {
    static instance: Redis;
    client: any;
    constructor() {

        if (!Redis.instance) {
            Redis.instance = this;
            this.client = redis.createClient();
        }
        return Redis.instance;
    }

    async connect(): Promise<void> {
        try {
            await this.client.connect();
            console.log("Redis connection established");
            // console.log("Client status", await this.client.status);
        } catch (error) {
            console.log(error.message);
            if (error.message = "The client is closed") {
                await this.client.connect();
                console.log("Redis connection established");
            } else {
                console.log("Client is already connected");
            }
        }
    }

    async set(key: string, value: string, seconds: number): Promise<void> {
        try {
            await this.client.set(key, value, 'EX', seconds);
            console.log("Value set successfully:", value);
        } catch (error) {
            console.log(error.message);
            if (error.message = "The client is closed") {
                await this.client.connect();
                console.log("Redis connection established");
                await this.client.set(key, value, 'EX', seconds);
                console.log("Value set successfully:", value);
            } else {
                console.log("Client is already connected");
            }
        }
    }

    async get(key: string): Promise<any> {
        try {
            const value = await this.client.get(key);
            if (value) {
                const data = JSON.parse(value);
                console.log("Value retrieved:", data);
                return data;
            } else {
                console.log("Key not found in Redis");
                return null; // You can return a default value or throw an error if needed
            }
        } catch (error) {
            console.log(error.message);
            if (error.message === "The client is closed") {
                await this.client.connect();
                console.log("Redis connection established");
                const value = await this.client.get(key);
                if (value) {
                    const data = JSON.parse(value);
                    console.log("Value retrieved:", data);
                    return data;
                } else {
                    console.log("Key not found in Redis");
                    return null; // You can return a default value or throw an error if needed
                }
            } else if (error.message == "Invalid argument type") {
                console.log("Please provide redis key");
                return "Please provide redis key";
            } else {
                console.log("Client is already connected");
                return;
            }
        }
    }

    async quit(): Promise<void> {
        try {
            await this.client.quit();
            console.log("Redis connection closed");
        } catch (error) {
            console.log(error.message);
            if (error.message = "The client is closed") {
                console.log("Client is already closed");
            }
        }
    }

    async delete(key: string): Promise<void> {
        try {
            const deletedCount = await this.client.del(key);
            if (deletedCount > 0) {
                console.log(`Key '${key}' deleted successfully`);
            } else {
                console.log(`Key '${key}' not found in Redis`);
            }
        } catch (error) {
            console.log(error.message);
            if (error.message === "The client is closed") {
                await this.client.connect();
                console.log("Redis connection established");
                const deletedCount = await this.client.del(key);
                if (deletedCount > 0) {
                    console.log(`Key '${key}' deleted successfully`);
                } else {
                    console.log(`Key '${key}' not found in Redis`);
                }
            } else {
                console.log("Client is already connected");
            }
        }
    }
}

// Export the Singleton instance
export default Redis;