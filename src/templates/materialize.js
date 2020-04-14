import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import DocsMenu from '../components/DocsMenu';
import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class Docs extends React.Component {
    render() {
        let root_page_path = _.get(this.props, 'pageContext.site.data.doc_sections.root_folder') + 'index.md';
        let current_page_path = '/' + _.get(this.props, 'pageContext.relativePath');
        let child_pages_path = '/' + _.get(this.props, 'pageContext.relativeDir');
        let child_pages = _.orderBy(_.filter(getPages(this.props.pageContext.pages, child_pages_path), item => _.get(item, 'base') != 'index.md'), 'frontmatter.weight');
        let child_count = _.size(child_pages);
        let has_children = (child_count > 0) ? true : false;
        return (
            <Layout {...this.props}>
              <div className="outer">
                <div className="inner">
                  <div className="docs-content">
				  
				  
				  
				  
				  
				  
				  <nav id="docs-nav" className="docs-nav">
   <div id="docs-nav-inside" className="docs-nav-inside sticky">
      <button id="docs-nav-toggle" className="docs-nav-toggle">Navigate Docs<span className="icon-angle-right" aria-hidden="true"></span></button>
      <div className="docs-toc-wrap">
				  
				  						<ul id="docs-toc" className="docs-toc custom">
   <li className="toc-item"><a href="#">Materialize CSS</a></li>

<li className="toc-item"><a href="/docs/">Materialize Home</a></li>
   <li className="toc-item"><a href="/docs/faq/">Materialize Colors</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Grid</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Helpers</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Media</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Shadows</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Table</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Typography</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Badges</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Buttons</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Breadcrumbs</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Cards</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Chips</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Collections</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Footer</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Forms</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Icons</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Navbar</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Pagination</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Preloader</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Collapsible</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Dialogs</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Dropdowns</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Tabs</a></li>
   <li className="toc-item"><a href="/docs/community/">Materialize Waves</a></li>a
</ul>
	</div>
   </div>
</nav>			  
				  
				  
				  
				  
				  
				  
				  
				  
				  
				  
				  
				  
				  
				  
                    <article className="post type-docs">
                      <div className="post-inside">
                        <header className="post-header">
                          <h1 className="post-title line-left">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        </header>
                        <div className="post-content">
						
                          {htmlToReact(_.get(this.props, 'pageContext.html'))}
                          {(root_page_path !== current_page_path) && <React.Fragment>
                            {has_children &&
                              <ul className="docs-section-items">
                                {_.map(child_pages, (child_page, child_page_idx) => (
                                <li key={child_page_idx} className="docs-section-item"><Link to={safePrefix(_.get(child_page, 'url'))} className="docs-item-link">{_.get(child_page, 'frontmatter.title')}<span className="icon-angle-right" aria-hidden="true" /></Link></li>
                                ))}
                              </ul>
                            }
                          </React.Fragment>}
                        </div>
                      </div>
                    </article>
                    <nav id="page-nav" className="page-nav">
                      <div id="page-nav-inside" className="page-nav-inside sticky">
                        <h2 className="page-nav-title">ON THIS PAGE</h2>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </Layout>
        );
    }
}
