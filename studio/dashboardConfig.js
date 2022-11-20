export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '637aad45e090c21a5cbee886',
                  title: 'Sanity Studio',
                  name: 'stephanie-honore-portfolio-website-nextjs-sanity-studio',
                  apiId: '88867957-9431-47dd-81fa-ff70e9d5cbf1'
                },
                {
                  buildHookId: '637aad45662f720a780899d3',
                  title: 'Blog Website',
                  name: 'stephanie-honore-portfolio-website-nextjs-sanity',
                  apiId: '2129030d-4a8e-4af0-9ae8-9f65910f5d0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shonore/stephanie-honore-portfolio-website-nextjs-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://stephanie-honore-portfolio-website-nextjs-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
