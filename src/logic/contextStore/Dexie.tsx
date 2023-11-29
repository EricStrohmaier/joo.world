import Dexie from 'dexie';

class MyDatabase extends Dexie {
    listEvents: Dexie.Table<{ [key: string]: string[]; }, number>;
    following: Dexie.Table<{[key: string]: string[]} >; 

    constructor() {
      super("your_people");
      this.version(2).stores({
        listEvents: '++id',
        following: '++id',
      });
      this.listEvents = this.table("listEvents");
      this.following = this.table("following");
    }
  }
  
  // Create an instance of the database
  const db = new MyDatabase();

// Export the database instance for global use
export default db;
