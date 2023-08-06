import React from 'react';

const ScheduleDemo = () => {
  const [viewModel, setViewModel] = useState({});

  useEffect(() => {
    let schedulerData = new SchedulerData('2017-12-18', ViewTypes.Week);
    schedulerData.localeMoment.locale('en');
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);
  });
};
