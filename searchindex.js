Search.setIndex({"docnames": ["DeepONet/DeepONet-1D/DeepONet-1D", "FNO/FNO-1D/FNO-1D", "FNO/FNO-2D/FNO-2D", "PINN/PINN-1D/PINN-1D", "U-Net/U-Net-2D/UNet-2D", "intro", "references"], "filenames": ["DeepONet/DeepONet-1D/DeepONet-1D.ipynb", "FNO/FNO-1D/FNO-1D.ipynb", "FNO/FNO-2D/FNO-2D.ipynb", "PINN/PINN-1D/PINN-1D.ipynb", "U-Net/U-Net-2D/UNet-2D.ipynb", "intro.md", "references.md"], "titles": ["Hands-on tutorials - DeepONet for 1D burgers equation", "Hands-on tutorials - Fourier Neural Operator for 1D Burgers equation", "Hands-on tutorials - Fourier Neural Operator for 2D Example", "Hands-on tutorials - Physics-informed neural network for 1D burgers equation", "Hands-on tutorials - Physics-informed neural network for 1D burgers equation", "Welcome to Hands-on Scientific Machine Learning!", "References"], "terms": {"http": [1, 5], "neuraloper": 1, "github": 1, "io": 1, "dev": 1, "user_guid": 1, "neural_oper": 1, "html": 1, "zongyi": 1, "li": 1, "blog": 1, "2020": 1, "pde": 1, "www": [1, 5], "technologyreview": 1, "com": 1, "10": 1, "30": 1, "1011435": 1, "ai": 1, "network": 1, "crack": 1, "navier": 1, "stoke": 1, "partial": 1, "differenti": 1, "equat": 5, "en": 1, "wikipedia": 1, "org": 1, "wiki": 1, "import": 5, "numpi": 1, "np": 1, "torch": 1, "nn": 1, "function": 1, "f": 1, "from": 1, "paramet": 1, "matplotlib": 1, "pyplot": 1, "plt": 1, "scipi": 1, "loadmat": 1, "os": 1, "time": [], "functool": [], "reduc": 1, "timeit": [], "default_tim": [], "utilities3": [], "seed": 1, "0": 1, "manual_se": [], "random": 1, "print": 1, "cuda": 1, "is_avail": 1, "str": [], "home": 1, "xxd5545": 1, "conda": 1, "env": 1, "torch2": 1, "lib": 1, "python3": 1, "9": 1, "site": 1, "packag": 5, "tqdm": [], "auto": [], "py": 1, "21": [], "tqdmwarn": [], "iprogress": [], "found": 5, "pleas": [1, 5], "updat": [0, 2, 3, 4], "jupyt": 1, "ipywidget": [], "see": 1, "readthedoc": [], "stabl": 1, "user_instal": [], "autonotebook": [], "notebook_tqdm": [], "true": 1, "class": 1, "spectralconv1d": 1, "modul": 1, "spectral": 1, "convolut": 1, "1d": 5, "layer": 1, "arg": 1, "in_channel": 1, "int": 1, "number": 1, "input": 1, "channel": [1, 5], "out_channel": 1, "output": 1, "modes1": 1, "mode": 1, "multipli": 1, "most": 1, "floor": 1, "n": 1, "2": 1, "1": 1, "attribut": 1, "scale": 1, "float": 1, "factor": 1, "weight": 1, "weights1": 1, "learnabl": 1, "method": [1, 5], "compl_mul1d": 1, "perform": 1, "complex": 1, "multipl": 1, "between": 1, "forward": 1, "x": 1, "pass": 1, "def": 1, "__init__": 1, "self": 1, "super": 1, "ar": [1, 5], "kept": 1, "rand": 1, "dtype": 1, "cfloat": 1, "tensor": 1, "shape": 1, "batch": 1, "return": 1, "result": 1, "common": 1, "dimens": 1, "along": 1, "which": 1, "It": [1, 5], "suggest": 1, "everi": 1, "featur": 1, "being": 1, "transform": [1, 5], "new": [1, 5], "set": 1, "The": [1, 5], "iter": 1, "over": 1, "each": [1, 5], "posit": 1, "correspond": 1, "sum": 1, "produc": 1, "For": 1, "given": 1, "i": [1, 5], "element": 1, "take": 1, "all": [1, 5], "valu": 1, "A": 1, "thi": [1, 5], "slice": 1, "b": 1, "matrix": 1, "wise": 1, "vector": 1, "repres": 1, "einsum": 1, "bix": 1, "iox": 1, "box": 1, "comput": [1, 5], "coeffcient": 1, "up": 1, "e": [], "someth": [], "constant": [], "x_ft": 1, "fft": 1, "rfft": 1, "nc": 1, "nx": 1, "eg": 1, "20": 1, "64": 1, "128": 1, "65": 1, "relev": 1, "out_ft": 1, "zero": 1, "size": 1, "devic": 1, "physic": 1, "space": 1, "irfft": 1, "fno1d": 1, "width": 1, "model": 5, "hidden": 1, "fc0": 1, "linear": 1, "meshgridtensor": 1, "initi": 1, "condit": 1, "conv0": 1, "conv1": 1, "conv2": 1, "conv3": 1, "w0": 1, "conv1d": 1, "w1": 1, "w2": 1, "w3": 1, "fc1": 1, "fc2": 1, "stage": 1, "lift": 1, "permut": 1, "integr": 1, "u": 1, "w": 1, "k": 1, "kernel": 1, "x1": 1, "x2": 1, "relu": 1, "3": 1, "put": 1, "back": 1, "training_data_resolut": [], "resolut": 1, "train": 5, "data": 1, "save_index": [], "index": [], "save": 1, "folder": 1, "dataset_path": 1, "deeponet": 1, "fno": 5, "burger": 5, "burgers_data_r10": 1, "mat": 1, "ntrain": [], "1000": 1, "ntest": [], "200": 1, "s": 1, "sub": 1, "6": [], "subsampl": [], "rate": 1, "13": 1, "step": 1, "batch_siz": 1, "learning_r": [], "001": 1, "epoch": 1, "default": [], "500": 1, "step_siz": 1, "100": 1, "gamma": 1, "5": 1, "16": 1, "read": 1, "dictionari": 1, "x_data": 1, "10000": [], "y_data": 1, "x_train": 1, "y_train": 1, "x_test": 1, "y_test": 1, "cat": 1, "locat": [], "inform": 1, "grid_al": 1, "linspac": 1, "reshap": 1, "astyp": 1, "float64": 1, "grid": 1, "repeat": 1, "dim": 1, "train_load": 1, "util": 1, "dataload": 1, "tensordataset": 1, "shuffl": 1, "test_load": 1, "fals": 1, "count_param": [], "evalu": 5, "optim": 1, "adam": 1, "lr": 1, "weight_decai": 1, "1e": 1, "4": 1, "schedul": 1, "lr_schedul": 1, "steplr": 1, "start_tim": [], "myloss": [], "lploss": [], "size_averag": [], "y_normal": [], "ep": [], "rang": [], "t1": [], "train_ms": [], "train_l2": [], "y": 1, "zero_grad": [], "out": [], "mse": [], "mse_loss": 1, "view": 1, "reduct": [], "mean": [], "backward": [], "decod": [], "l2": [], "us": [1, 5], "rel": 1, "loss": [], "item": 1, "break": 1, "eval": 1, "test_l2": [], "no_grad": 1, "len": [], "t2": [], "d": 1, "3f": [], "3e": [], "4f": [], "test": 1, "elaps": [], "done": [], "2048": 1, "287425": [], "173": [], "068e": [], "02": [], "3746": [], "0975": [], "486": [], "053e": [], "03": [], "0645": [], "0476": [], "489": [], "437e": [], "04": [], "0409": [], "0447": [], "488": [], "961e": [], "0362": [], "0336": [], "201e": [], "0365": [], "0536": [], "260e": [], "0452": [], "0400": [], "481": [], "839e": [], "0351": [], "0410": [], "7": [], "783e": [], "0316": [], "0274": [], "8": 1, "487": [], "544e": [], "0288": [], "0240": [], "477": [], "769e": [], "0297": [], "0287": [], "740e": [], "0318": [], "0281": [], "11": [], "485": [], "289e": [], "0357": [], "0306": [], "12": 1, "490": [], "0389": [], "0324": [], "484": [], "180e": [], "0356": [], "0295": [], "14": [], "102e": [], "0322": [], "0354": [], "15": [], "965e": [], "0393": [], "483": [], "136e": [], "0342": [], "0329": [], "17": [], "405e": [], "0292": [], "0482": [], "18": [], "499e": [], "0376": [], "0220": [], "19": [], "306e": [], "0282": [], "0333": [], "389": [], "current_directori": [], "getcwd": [], "trainres_": [], "folder_index": [], "results_dir": [], "save_results_to": [], "path": 1, "exist": [], "makedir": [], "model_dir": [], "save_models_to": [], "fourier_burg": [], "pkl": [], "matread": [], "test_data_res_list": [], "256": 1, "512": [], "1024": 1, "4096": [], "8192": [], "test_data_r": [], "read_field": [], "pred": 1, "squeez": 1, "testing_tim": [], "plot": [], "first": 1, "sampl": [], "figur": 1, "figsiz": 1, "cpu": 1, "r": 1, "label": 1, "predict": 1, "ground": 1, "truth": 1, "scatter": 1, "arang": 1, "c": 1, "legend": 1, "loc": 1, "upper": 1, "right": 1, "titl": [1, 5], "savemat": [], "burger_test": [], "mdict": [], "burger_test_": [], "y_pred": [], "document": 1, "julia": 1, "doc": 1, "sciml": 1, "introduct": 1, "2d": 5, "invers": [], "driven": [], "discoveri": [], "differ": [1, 5], "re": 5, "build": [], "your": [1, 5], "ghp": [], "p": [], "_build": [], "befor": [], "push": [], "newli": [], "built": [], "gh": [], "page": [], "branch": [], "author": [1, 5], "xiaoyu": [1, 5], "xie": [1, 5], "email": [1, 5], "xiaoyuxie2020": [1, 5], "northwestern": [1, 5], "edu": [1, 5], "date": 1, "2024": [1, 5], "01": [], "origin": 1, "code": 5, "blob": [], "master": [], "fourier_1d": [], "oper": [], "modulenotfounderror": [], "traceback": [], "recent": [], "call": [], "last": [], "cell": 1, "In": 5, "line": [], "22": [], "23": [], "25": 1, "No": [], "name": 1, "fourier": [], "neural": [], "289": [], "refer": [], "whether": 1, "you": [1, 5], "write": [], "book": [1, 5], "content": 1, "notebook": 1, "ipynb": [], "regular": [], "md": [], "ll": [], "same": [], "flavor": [], "simpl": [], "help": [1, 5], "get": 1, "start": [], "show": 1, "off": 1, "some": [], "syntax": [], "stand": [], "markedli": [], "structur": [], "text": [], "slight": [], "variat": [], "commonmark": [], "small": [], "extens": [], "allow": [], "sphinx": [], "ecosystem": [], "about": [], "overview": [], "two": 1, "power": [], "tool": [], "thei": [], "kind": [], "like": [], "written": [], "markup": [], "languag": [], "both": [], "serv": [], "similar": 5, "purpos": [], "one": 1, "wherea": [], "span": [], "mani": [], "accept": [], "do": [], "those": [], "depend": [], "specif": 1, "here": 5, "note": 1, "render": [], "special": [], "when": [], "an": 5, "inlin": [], "can": [1, 5], "also": [1, 5], "cite": [1, 5], "store": [], "bibtex": [], "exampl": [1, 5], "follow": [], "holdgraf_evidence_2014": [], "moreov": [], "insert": [], "bibliographi": [], "must": [], "properli": 1, "bib": [], "just": 1, "starter": [], "lot": [], "jupyterbook": [], "intro": [], "To": [0, 1, 2, 3, 4], "mai": 1, "pytorch_lightn": 1, "pl": 1, "callback": 1, "modelcheckpoint": 1, "seed_everyth": 1, "reproduc": 1, "backend": 1, "cudnn": 1, "determinist": 1, "benchmark": 1, "choos": 1, "gpu": 1, "id": 1, "environ": 1, "cuda_visible_devic": 1, "els": 1, "pytorch": 1, "version": 1, "__version__": 1, "global": 1, "cu116": 1, "c_in": 1, "c_out": 1, "sinc": 1, "onli": 1, "config": 1, "num_epoch": 1, "debug": 1, "decai": 1, "learn": 1, "coeffici": 1, "download": 5, "drive": 1, "googl": 1, "file": 1, "16a8od4vidbinr3wtabpcsz0t3moxjhy": 1, "usp": 1, "drive_link": 1, "downsampl": 1, "spatial": 1, "resolution_origin": 1, "num_train": 1, "num_test": 1, "model_path": 1, "model_burgers_r10": 1, "checkpoint_dir": 1, "checkpoints_burgers_r10": 1, "cfg": 1, "prepare_data": 1, "raw_data": 1, "load": 1, "raw": 1, "loader": 1, "num_trajectori": 1, "split": 1, "option": 1, "concaten": 1, "solut": 1, "creat": [1, 5], "datamodul": 1, "lightningdatamodul": 1, "lightn": 1, "none": 1, "setup": 1, "have": [1, 5], "been": 1, "train_dataload": 1, "val_dataload": 1, "test_dataload": 1, "data_modul": 1, "plmodel": 1, "lightningmodul": 1, "metric": 1, "train_loss": 1, "val_loss": 1, "test_loss": 1, "training_step": 1, "batch_idx": 1, "y_hat": 1, "log": 1, "on_step": 1, "on_epoch": 1, "prog_bar": 1, "logger": 1, "append": 1, "validation_step": 1, "test_step": 1, "configure_optim": 1, "evaluate_at_different_resolut": 1, "resolution_test_list": 1, "resolution_test": 1, "_": 1, "comparison": 1, "checkpoint_callback": 1, "monitor": 1, "dirpath": 1, "filenam": 1, "02d": 1, "2f": 1, "save_top_k": 1, "min": 1, "trainer": 1, "max_epoch": 1, "acceler": 1, "enable_progress_bar": 1, "disabl": 1, "progress": 1, "bar": 1, "better": 1, "enabl": 1, "python": 5, "script": 1, "fit": 1, "ensur": 1, "correctli": 1, "lightning_fabr": [], "plugin": [], "slurm": [], "165": [], "possibleuserwarn": [], "srun": [], "command": [], "avail": 1, "hint": [], "If": [1, 5], "intent": [], "run": [1, 5], "prepend": [], "so": [], "rank_zero_warn": [], "tpu": 1, "core": 1, "ipu": 1, "hpu": 1, "nvidia": 1, "rtx": 1, "a6000": 1, "ha": 1, "them": [1, 5], "should": 1, "set_float32_matmul_precis": 1, "medium": 1, "high": 1, "trade": 1, "precis": 1, "more": 1, "detail": 1, "gener": 1, "model_checkpoint": [], "615": [], "userwarn": 1, "checkpoint": [], "directori": [], "mnt": [], "sci": [1, 5], "ml": [1, 5], "empti": [], "local_rank": 1, "type": 1, "param": 1, "287": 1, "trainabl": 1, "non": 1, "total": 1, "150": 1, "estim": 1, "mb": 1, "connector": [], "data_connector": [], "432": [], "doe": [], "worker": [], "bottleneck": [], "consid": [], "increas": 1, "num_work": [], "argument": [], "try": [], "96": [], "machin": 1, "init": [], "improv": [], "stop": 1, "reach": 1, "715315976180136e": [], "05": [], "subplot": 1, "xlabel": 1, "ylabel": 1, "yscale": 1, "val": 1, "paper": [1, 5], "z": 1, "kovachki": 1, "azizzadenesh": 1, "liu": 1, "bhattacharya": 1, "stuart": 1, "anandkumar": 1, "parametr": 1, "arxiv": 1, "preprint": 1, "2010": 1, "08895": 1, "offici": 1, "ceyron": 1, "simul": 1, "lu": 1, "group": 1, "find": [1, 5], "xie2024sml": [1, 5], "scientif": 1, "url": [1, 5], "xiaoyuxi": [1, 5], "top": [1, 5], "year": [1, 5], "publish": [1, 5], "univers": 5, "person": 5, "websit": 5, "interact": 5, "state": 5, "art": 5, "deep": 5, "solv": [1, 5], "variou": 5, "challeng": 5, "engin": 5, "problem": 5, "tutori": 5, "includ": 5, "visual": 5, "youtub": 5, "video": 5, "implement": 5, "directli": 5, "toturi": 5, "colab": [1, 5], "local": [1, 5], "explor": 5, "how": 5, "wa": 5, "propos": 5, "instead": 5, "sole": 5, "tell": 5, "becaus": 5, "our": 5, "ultim": 5, "goal": 5, "develop": 5, "algorithm": 5, "world": 5, "we": 5, "alwai": 5, "face": 5, "never": 5, "seen": 5, "hone": 5, "ourself": 5, "discov": 5, "mileston": 5, "experi": 5, "system": 5, "configur": 5, "peopl": 5, "interest": 5, "discuss": 5, "depth": 5, "field": 5, "feel": 5, "free": 5, "me": 5, "send": 5, "li2020fouri": 1, "popular": 1, "approach": 1, "perspect": 1, "combin": 1, "three": 1, "main": 1, "block": 1, "truncat": 1, "conv": 1, "make": 1, "sure": 1, "deal": 1, "desir": 1, "ipython": 1, "displai": 1, "youtubevideo": 1, "rb8gyytdltc": 1, "700": 1, "height": 1, "400": 1, "syf0rnt3ekm": 1, "1tssyxcsskkq2swsspid8s5bkfgbn8boi": 1, "share": 1, "runtim": 1, "chang": 1, "is_running_on_colab": 1, "colab_gpu": 1, "check": 1, "mount": 1, "alreadi": 1, "ls": 1, "mydriv": 1, "need": 1, "data_t": 1, "traitlet": 1, "move": 1, "level": 1, "_traitlet": 1, "warn": 1, "filterwarn": 1, "ignor": 1, "ouput": 1, "clear": 1, "But": 1, "00026296277064830065": 1, "again": 1, "much": 1, "smaller": 1, "other": 1, "techniqu": 1, "scheme": 1, "what": 5, "dataset": 5, "homework": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"fourier": [1, 2, 5], "neural": [1, 2, 3, 4, 5], "oper": [1, 2, 5], "refer": [1, 5, 6], "sci": [], "ml": [], "book": [], "content": 5, "updat": 5, "onlin": [], "welcom": 5, "scientif": 5, "machin": 5, "learn": 5, "markdown": [], "file": [], "what": 1, "myst": [], "sampl": [], "role": [], "direct": [], "citat": [1, 5], "more": [], "here": [], "s": [], "my": [], "titl": [], "first": [], "section": [], "hand": [0, 1, 2, 3, 4, 5], "tutori": [0, 1, 2, 3, 4], "deeponet": [0, 5], "1d": [0, 1, 3, 4], "burger": [0, 1, 3, 4], "equat": [0, 1, 3, 4], "system": 1, "configur": 1, "defin": 1, "fno": 1, "model": 1, "dataset": 1, "prepar": 1, "train": 1, "evalu": 1, "plot": 1, "valid": 1, "loss": 1, "2d": 2, "exampl": 2, "physic": [3, 4, 5], "inform": [3, 4, 5], "network": [3, 4, 5], "style": 5, "scope": 5, "tabl": 5, "part": 5, "1": 5, "2": 5, "To": 5, "3": 5, "4": 5, "u": 5, "net": 5, "discord": 5, "commun": 5, "contact": 5, "how": 1, "implement": 1, "download": 1, "import": 1, "python": 1, "packag": 1, "homework": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})