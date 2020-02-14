# reference
https://docs.microsoft.com/ja-jp/aspnet/core/blazor/?view=aspnetcore-3.1

# project init
## setup CLI
```
# download SDK
# https://dotnet.microsoft.com/download/dotnet-core/3.1

# install template
dotnet new -i Microsoft.AspNetCore.Blazor.Templates::3.2.0-preview1.20073.1

# new project
dotnet new blazorwasm -o {project-name}

# run application
dotnet run

# git init
git init
# todo: setting .gitignore
git add .
git commit -m "first commit"

```

## BluetoothLE
```
dotnet add package Shiny.BluetoothLE --version 1.0.0.1182-beta

dotnet publish -c Release
```