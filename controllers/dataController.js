exports.getData = (req, res, next) => {
  // Get Slack name and Track from query object
  const { slack_name, track } = req.query;

  // Get current day of the week
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const dayOfWeekIndex = today.getDay();
  const current_day = weekdays[dayOfWeekIndex];

  //   Get Current UTC time
  const utcTime = today.toISOString();

  console.log(current_day, utcTime);

  console.log(slack_name, track);
  res.status(200).json({
    slack_name,
    current_day,
    utcTime,
    track,
    github_file_url: 'https://github.com',
    github_repo_url: 'https://github.com',
    status_code: 200,
  });
};
