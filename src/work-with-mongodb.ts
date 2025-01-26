// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

// Use Mongoose library

type DuplicatedUsers = {
    email: string
}

async function manageUsers(): Promise<DuplicatedUsers[]> {
    import mongoose from 'mongoose';

    type DuplicatedUsers = {
        email: string;
    };

    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: false }, // Not enforcing uniqueness at the database level
    });

    const User = mongoose.model('User', userSchema);

    async function manageUsers(): Promise<DuplicatedUsers[]> {
        try {

            await mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
                useNewUrlParser: true,
                ALPNProtocols: undefined,
                allowPartialTrustChain: false,
                appName: "",
                auth: undefined,
                authMechanism: undefined,
                authMechanismProperties: undefined,
                authSource: "",
                autoCreate: false,
                autoEncryption: undefined,
                autoIndex: false,
                autoSelectFamily: false,
                autoSelectFamilyAttemptTimeout: 0,
                bufferCommands: false,
                ca: undefined,
                cert: undefined,
                checkKeys: false,
                checkServerIdentity: undefined,
                ciphers: undefined,
                compressors: undefined,
                connectTimeoutMS: 0,
                crl: undefined,
                dbName: "",
                directConnection: false,
                driverInfo: undefined,
                ecdhCurve: undefined,
                enableUtf8Validation: false,
                family: undefined,
                forceServerObjectId: false,
                heartbeatFrequencyMS: 0,
                hints: undefined,
                ignoreUndefined: false,
                journal: false,
                key: undefined,
                loadBalanced: false,
                localAddress: undefined,
                localPort: undefined,
                localThresholdMS: 0,
                lookup: undefined,
                maxConnecting: 0,
                maxIdleTimeMS: 0,
                maxPoolSize: 0,
                maxStalenessSeconds: 0,
                minDHSize: undefined,
                minHeartbeatFrequencyMS: 0,
                minPoolSize: 0,
                monitorCommands: false,
                noDelay: false,
                pass: "",
                passphrase: undefined,
                pfx: undefined,
                pkFactory: undefined,
                proxyHost: "",
                proxyPassword: "",
                proxyPort: 0,
                proxyUsername: "",
                raw: false,
                readConcern: undefined,
                readConcernLevel: undefined,
                readPreference: undefined,
                readPreferenceTags: [],
                rejectUnauthorized: undefined,
                replicaSet: "",
                retryReads: false,
                retryWrites: false,
                sanitizeFilter: false,
                secureContext: undefined,
                secureProtocol: undefined,
                serializeFunctions: false,
                serverApi: undefined,
                serverMonitoringMode: undefined,
                serverSelectionTimeoutMS: 0,
                servername: undefined,
                session: undefined,
                socketTimeoutMS: 0,
                srvMaxHosts: 0,
                srvServiceName: "",
                ssl: false,
                tls: false,
                tlsAllowInvalidCertificates: false,
                tlsAllowInvalidHostnames: false,
                tlsCAFile: "",
                tlsCRLFile: "",
                tlsCertificateKeyFile: "",
                tlsCertificateKeyFilePassword: "",
                tlsInsecure: false,
                user: "",
                w: undefined,
                waitQueueTimeoutMS: 0,
                writeConcern: undefined,
                wtimeoutMS: 0,
                zlibCompressionLevel: undefined,
                useUnifiedTopology: true
            });
            console.log('Connected to MongoDB');


            const usersToAdd = [
                { name: 'Alice', email: 'alice@example.com' },
                { name: 'Bob', email: 'bob@example.com' },
                { name: 'Charlie', email: 'alice@example.com' }, // Duplicate email
            ];


            await User.insertMany(usersToAdd);


            const duplicates = await User.aggregate([
                { $group: { _id: '$email', count: { $sum: 1 } } }, // Group by email and count occurrences
                { $match: { count: { $gt: 1 } } }, // Find groups with count > 1
                { $project: { _id: 0, email: '$_id' } }, // Project the duplicate emails
            ]);

            console.log('Duplicate emails:', duplicates);

            return duplicates;
        } catch (error) {
            console.error('Error managing users:', error);
            throw new Error('Failed to manage users');
        } finally {

            await mongoose.disconnect();
            console.log('Disconnected from MongoDB');
        }
    }

    module.exports = { manageUsers };

    return []
}

module.exports = { manageUsers }