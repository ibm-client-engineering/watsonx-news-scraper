#Helper Functions
def remove_formatting(str) :
    return ''.join(s for s in str if ord(s)>31 and ord(s)<126).replace("   ", "").replace("$", "\$")

def update_row_with_dict(df,d,idx):
    keys = d.keys()
    for i in range(len(keys)) :
        df.loc[idx,list(keys)[i]] = d[list(keys)[i]]