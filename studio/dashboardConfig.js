export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '60da1aaa29edf22c2cf935bd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zons45yp',
                  apiId: 'f96702ca-e6a6-4508-adbc-92e974ac41f9'
                },
                {
                  buildHookId: '60da1aaa7556542381a4b9bd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7f3n3ztb',
                  apiId: 'c1d66134-18c5-42c8-b7ea-01a98f7d30ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertobirijnr/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7f3n3ztb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
