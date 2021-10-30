const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};


exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const productTemplate = path.resolve('./src/templates/article.js');
	const actuTemplate = path.resolve('./src/templates/actu.js');
	
	// Individual blogs pages
	const product = graphql(`
  {
    produits: allDatoCmsBoutique {
       edges {
         node {
			url
			id
         }
       }
     }
   }
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create product pages
		result.data.produits.edges.forEach(({ node }) => {
			createPage({
        path: `boutique/${node.url}`,
				component: productTemplate,         
				context: {url: node.url},

			});
		});
	});

	// Atelier
	const actu = graphql(`
		{
			actu: allDatoCmsActualite {
				edges {
				  node {
					url
					id
          }
        }
      }
    }
    
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create atelier pages
		result.data.actu.edges.forEach(({ node }) => {
			createPage({
        path: `actu/${node.url}`,
				component: actuTemplate,
        context: {url: node.url},
			});
		});
	});



	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([product, actu]);
};