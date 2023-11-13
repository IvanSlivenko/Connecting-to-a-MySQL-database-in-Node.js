const mysql =require('mysql')

const conn = mysql.createConnection(config: {
    host: "itgid.mysql.tools",
    user: "itgid_nodetest",
    database: "itgid_nodecourse",
    password: "Al6gAi50YiB0"
});

conn.connect(err => { 
    if (err) {
        console.log(err);
        return err;
    }
    else { 
        console.log('database ------- OK');
    }
})