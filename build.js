'use strict'

const ExecutedLint = require('./wall/ExecutedLint')
const ExecutedTestCoverage = require('./wall/ExecutedTestCoverage')
const ExecutedTestCoverageCheck = require('./wall/ExecutedTestCoverageCheck')
const ExecutedTestCoverageReport = require('./wall/ExecutedTestCoverageReport')
const LoggedTotalCoverageByJsonSummary = require('./wall/LoggedTotalCoverageByJsonSummary')
const ReadDataByPath = require('./fs/ReadDataByPath')
const ParsedJSON = require('./json/ParsedJSON')

new ExecutedLint(process, './src').after(
  new ExecutedLint(process, './test').after(
    new ExecutedTestCoverageReport(
      new ExecutedTestCoverageCheck(
        new ExecutedTestCoverage(
          process, './test-executor'
        ),
        { 'lines': 90, 'functions': 100, 'branches': 70 }
      ), 'json-summary'
    ).after(
      new LoggedTotalCoverageByJsonSummary(
        new ParsedJSON(
          new ReadDataByPath('coverage/coverage-summary.json', { encoding: 'utf8' })
        ), (linesPct, statementsPct, functionsPct, branchesPct) => {
          return (linesPct + statementsPct + functionsPct + branchesPct) / 4
        }
      )
    )
  )
).call()
