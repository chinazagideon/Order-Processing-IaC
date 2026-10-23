exports.handler = async event => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  const secretArn = process.env.PAYMENT_SECRET_ARN;
  if (!secretArn) {
    throw new Error('Missing required environment variable: PAYMENT_SECRET_ARN');
  }

  console.log(`Processing payment using secret configured at: ${secretArn}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'PAYMENT_PROCESSED' }),
  };
};
