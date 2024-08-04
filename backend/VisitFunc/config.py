import os

settings = {
    'host': os.environ.get('ACCOUNT_HOST', '${{vars.docEndpoint}}'),
    'master_key': os.environ.get('ACCOUNT_KEY', '${{secrets.dbKey}}'),
    'database_id': os.environ.get('COSMOS_DATABASE', 'VisitCount'),
    'container_id': os.environ.get('COSMOS_CONTAINER', 'Visits'),
    #'database_id': os.environ.get('COSMOS_DATABASE', 'ToDoList'),
    #'container_id': os.environ.get('COSMOS_CONTAINER', 'Items'),
}