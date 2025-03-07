import cn from 'classnames'
import { activeTabFinder } from '../../middlewares/activeTabFinder'

export const Tabs = ({ tabs, activeTabId, onTabSelected}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li className={cn({
                'is-active': activeTabFinder(tabs, activeTabId).id === tab.id
              })}
              data-cy="Tab"
              key={tab.id}
              >
              <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => tab.id !== activeTabId ? onTabSelected(tab.id) : null}
              >
                {tab.title}
              </a>
            </li>
            )
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabFinder(tabs, activeTabId)?.content}
      </div>
    </div>
  )
};
