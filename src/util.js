function getVarsFromHomeURL(search) {
  const params = new URLSearchParams(search);
  const vars = {};
  if (params.get('startDate')) vars.startDate = new Date(params.get('startDate'));
  else vars.startDate = new Date('2016-08-21T01:00:00');
  if (params.get('endDate')) vars.endDate = new Date(params.get('endDate'));
  else {
    vars.endDate = new Date(vars.startDate.getTime() + 1 * 24 * 60 * 60 * 1000);
  }
  if (params.get('district')) vars.district = params.get('district');
  else vars.district = 'All';
  if (params.get('beat')) vars.beat = params.get('beat');
  else vars.beat = 'All';
  if (params.get('type')) vars.type = params.get('type');
  else vars.type = 'All';
  return vars;
}

function getVarsFromReportURL(search) {
  const params = new URLSearchParams(search);
  const vars = {};
  if (params.get('startDate')) vars.startDate = new Date(params.get('startDate'));
  else vars.startDate = new Date('2008-01-01T01:00:00');
  if (params.get('endDate')) vars.endDate = new Date(params.get('endDate'));
  else {
    vars.endDate = new Date('2016-12-31T23:50:00');
  }
  if (params.get('district')) vars.district = params.get('district');
  else vars.district = 'All';
  if (params.get('beat')) vars.beat = params.get('beat');
  else vars.beat = 'All';
  if (params.get('type')) vars.type = params.get('type');
  else vars.type = 'All';
  return vars;
}

function getVarsFromDiscussionURL(match) {
  const { params: { id } } = match;
  let result = id;
  let defaultVal = false;
  if (id === null || id === undefined) {
    result = '5f2a9e5f0c115a7bf2d452dd';
    defaultVal = true;
  }
  return { id: result, defaultVal };
}

export { getVarsFromHomeURL, getVarsFromReportURL, getVarsFromDiscussionURL };
