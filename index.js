const express = require('express');
const app = express();
const session = require('express-session');

// **********
// MIDDLEWARE
// **********

// Form Submission
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Sessions
app.use(session({secret: 'SECRET', resave: false, saveUninitialized: true}));

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';

app.get('/', (req,res) => {
	console.log(req.sessionID);
	res.json(req.session);
	console.log(req);
});

const listRoutes = require('./routes/lists');
app.use('/lists', listRoutes);

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// TEMPORARY TEST DATA

const db = require('./models');

async function clearDbs(){
	return Promise.all([
		db.User.remove({}),
		db.List.remove({}),
		db.Item.remove({})
	]);
}

async function initialize(){
	await clearDbs();

	const tempUser = {
		name: 'Kevin Rompala',
		email: 'cuds1212@gmail.com',
	};
	
	db.User.create(tempUser)
		.then(newUser => {
			const tempList = {
				name: 'My First List',
				createdBy: newUser
			};
	
			db.List.create(tempList)
				.then(newList => {
					newUser.lists.push(newList);
					newUser.save();
	
					const tempItem = {
						name: 'Magic Cards',
						createdBy: newUser,
						priority: 'medium',
					};
	
					db.Item.create(tempItem)
						.then(newItem => {
							newList.items.push(newItem);
							newList.save();
						})
						.catch(err => {
							console.log(err);
						});
				})
				.catch(err => {
					console.log(err);
				});
		})
		.catch(err => {
			console.log(err);
		});
};

initialize();

app.listen(PORT, IP, () => {
	console.log('Server has been started!');
});