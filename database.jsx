import React from 'react';

export default function ButtonWithDatabase() {
    return (
        <div>
            <button onClick={main} >Click me</button>
        </div>
    )
};

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    dbNames="Databases:"
    databasesList.databases.forEach(db => (dbNames+` - ${db.name}`));
    return dbNames
};

async function main() {
    const {MongoClient} = require('mongodb');
	const uri = "mongodb+srv://pratiharprince:christmas@travellingblog.ht059.mongodb.net/?retryWrites=true&w=majority&appName=TravellingBlog";
    const client = new MongoClient(uri);
    try {
        await client.connect();
    
        dbNames=await listDatabases(client);
        alert("done");
    } catch (e) {
        console.error(e);
    }finally {
        await client.close();
    }   
    return dbNames
}
