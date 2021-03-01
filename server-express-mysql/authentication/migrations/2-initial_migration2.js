'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "updatedAt" from table "users"
 * removeColumn "createdAt" from table "users"
 * removeColumn "id" from table "users"
 * changeColumn "Username" on table "users"
 * changeColumn "Email" on table "users"
 * changeColumn "UserId" on table "users"
 * changeColumn "UserId" on table "users"
 * changeColumn "UserId" on table "users"
 *
 **/

var info = {
    "revision": 2,
    "name": "initial_migration2",
    "created": "2021-02-26T04:51:24.406Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["users", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["users", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["users", "id"]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Username",
            {
                "type": Sequelize.STRING,
                "field": "Username",
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Email",
            {
                "type": Sequelize.STRING,
                "field": "Email",
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};