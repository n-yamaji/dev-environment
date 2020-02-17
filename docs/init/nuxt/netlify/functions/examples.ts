import {
  APIGatewayProxyEvent,
  APIGatewayProxyCallback
} from 'aws-lambda'

exports.handler = async (
  event: APIGatewayProxyEvent,
  context: any,
  callback: APIGatewayProxyCallback
) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ example: 'yes' })
  })
}
