# project init
1. Xcodeからプロジェクトを作成
1. `cd {projectRoot}`
1. `pod init`
1. Podfileにライブラリを追記
    - `pod '{ライブラリ名}', '{バージョン}'`
1. `pod install`
1. `{プロジェクト名}.xcworkspace` を開く

# ディレクトリ構成
- {projectName}
    - {projectName}
    - {projectName}Tests
    - {projectName}UITests
    - {projectName}.xcworkspace
    - Pods
    - Podfile
