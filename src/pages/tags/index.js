import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <div>
    <Helmet title={`Tags | ${title}`} />
    <section className='mw7 center avenir'>
      <section className='pa3'>
        <h3 className='if3 f2-m f-subheadline-l measure lh-title fw1 mt0 mb0'>Tags</h3>
      </section>
      <ul className='list ph3 ph5-ns pv4'>
        {group.map(tag => (
          <li key={tag.fieldValue} className='dib mr1 mb2'>
            <Link
              className='f6 f5-ns b db pa2 link dim dark-gray ba b--black-20'
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </div>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
