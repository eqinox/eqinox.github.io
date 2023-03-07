import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import React, { useEffect, useRef, useMemo } from 'react';
import { useTabs } from './Tabs';

const SimpleTab = ({
	index,
	...props
}) => {
	const ref = useRef();
	const {
		addTab,
		currentTab,
		removeTab
	} = useTabs();
	const tabId = props.tabId || props['data-qid'];
	useEffect(() => {
		console.log('Call Add', tabId, index);
		addTab({
			tabId,
			index
		});
		return () => {
			console.log('Call Remove', tabId, index);
			removeTab({
				tabId,
				index
			});
		};
	}, [tabId, index]);
	const isHidden = currentTab !== tabId;
	return <Box ref={ref} role="tabpanel" hidden={isHidden} {...props} />;
};

const propInfo = {
	tabId: {
		title: 'Tab ID',
		description: {
			en: 'The ID of the TabPanel to show when clicked.'
		},
		control: 'input'
	}
};
export default atomize(SimpleTab)({
	name: 'SimpleTab',
	description: {
		en: 'Контейнер для ресурсов связанных с вкладкой. Должен располагаться внутри SimpleTabs'
	},
	propInfo
});